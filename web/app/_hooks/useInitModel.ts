import { executeSerial } from "@/_services/pluginService";
import { InferenceService } from "@janhq/plugin-core";
import { useAtom } from "jotai";
import { activeAssistantModelAtom } from "@/_helpers/atoms/Model.atom";
import { AssistantModel } from "@/_models/AssistantModel";

export default function useInitModel() {
  const [activeModel, setActiveModel] = useAtom(activeAssistantModelAtom);

  const initModel = async (model: AssistantModel) => {
    if (activeModel && activeModel._id === model._id) {
      console.debug(`Model ${model._id} is already init. Ignore..`);
      return;
    }

    const currentTime = Date.now();
    console.debug("Init model: ", model._id);

    const res = await executeSerial(InferenceService.InitModel, model._id);
    if (res?.error) {
      console.log("error occured: ", res);
      return res;
    } else {
      console.debug(
        `Init model successfully!, take ${Date.now() - currentTime}ms`
      );
      setActiveModel(model);
      return {};
    }
  };

  return { initModel };
}