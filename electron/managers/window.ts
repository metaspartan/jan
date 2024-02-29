import { BrowserWindow } from 'electron'

/**
 * Manages the current window instance.
 */
class WindowManager {
  public currentWindow?: BrowserWindow
  private _quickAskWindow: BrowserWindow | undefined = undefined
  private _quickAskWindowVisible = false

  /**
   * Creates a new window instance.
   * @param {Electron.BrowserWindowConstructorOptions} options - The options to create the window with.
   * @returns The created window instance.
   */
  createWindow(options?: Electron.BrowserWindowConstructorOptions | undefined) {
    this.currentWindow = new BrowserWindow({
      width: 1200,
      minWidth: 1200,
      height: 800,
      show: true,
      trafficLightPosition: {
        x: 10,
        y: 15,
      },
      titleBarStyle: 'hiddenInset',
      vibrancy: 'sidebar',
      ...options,
    })
    return this.currentWindow
  }

  minimizeQuickAskWindow(): void {
    this._quickAskWindow?.minimize()
    this._quickAskWindowVisible = false
  }

  showQuickAskWindow(): void {
    this._quickAskWindow?.show()
    this._quickAskWindowVisible = true
  }

  isQuickAskWindowVisible(): boolean {
    return this._quickAskWindowVisible
  }

  createQuickAskWindow(preloadPath: string, startUrl: string): void {
    this._quickAskWindow = new BrowserWindow({
      width: 560,
      height: 60,
      transparent: true,
      frame: false,
      type: 'panel',
      resizable: true,
      webPreferences: {
        nodeIntegration: true,
        preload: preloadPath,
        webSecurity: false,
      },
    })

    this._quickAskWindow.loadURL(startUrl)
    this.minimizeQuickAskWindow()
  }
}

export const windowManager = new WindowManager()
