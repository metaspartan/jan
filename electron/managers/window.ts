import { BrowserWindow } from 'electron'

/**
 * Manages the current window instance.
 */
class WindowManager {
  public mainWindow?: BrowserWindow
  public _quickAskWindow: BrowserWindow | undefined = undefined
  private _quickAskWindowVisible = false
  private _mainWindowVisible = false

  /**
   * Creates a new window instance.
   * @param {Electron.BrowserWindowConstructorOptions} options - The options to create the window with.
   * @returns The created window instance.
   */
  createMainWindow(
    options?: Electron.BrowserWindowConstructorOptions | undefined
  ) {
    this.mainWindow = new BrowserWindow({
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
    return this.mainWindow
  }

  isMainWindowVisible(): boolean {
    return this._mainWindowVisible
  }

  minimizeMainWindow(): void {
    this.mainWindow?.minimize()
    this._mainWindowVisible = false
  }

  showMainWindow(): void {
    this.mainWindow?.show()
    this._mainWindowVisible = true
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
      width: 350,
      height: 60,
      transparent: true,
      frame: false,
      type: 'panel',
      // resizable: false,
      webPreferences: {
        nodeIntegration: true,
        preload: preloadPath,
        webSecurity: false,
      },
    })

    this._quickAskWindow.loadURL(startUrl)
    this._quickAskWindow.on('blur', () => {
      this.minimizeQuickAskWindow()
    })
    this.minimizeQuickAskWindow()
  }

  expandQuickAskWindow(): void {
    this._quickAskWindow?.setSize(556, 300)
  }

  shrinkQuickAskWindow(): void {
    this._quickAskWindow?.setSize(350, 60)
  }

  cleanUp(): void {
    this.mainWindow?.destroy()
    this._quickAskWindow?.destroy()
    this._quickAskWindowVisible = false
    this._mainWindowVisible = false
  }
}

export const windowManager = new WindowManager()
