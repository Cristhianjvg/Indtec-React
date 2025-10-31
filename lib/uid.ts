export default class UID {
  private async hash(input: string): Promise<string> {
    const data = new TextEncoder().encode(input);
    const digest = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(digest))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }

  async generateHeaderID(): Promise<string> {
    const res: (string | number | string[])[] = [];
    try {
      // Propiedades básicas de navigator
      res.push(navigator.userAgent);
      res.push(navigator.platform);
      res.push(navigator.product);
      res.push(navigator.productSub);
      res.push(navigator.vendor);
      res.push(navigator.vendorSub);
      res.push(navigator.plugins?.length ?? 0);

      // Nombres de plugins si están disponibles
      if (navigator.plugins) {
        const names: string[] = [];
        for (let i = 0; i < navigator.plugins.length; i++) {
          names.push(navigator.plugins[i]?.name ?? "");
        }
        res.push(names.join("|"));
      } else {
        res.push("");
      }

      // MIME types
      res.push(navigator.mimeTypes?.length ?? 0);
      if (navigator.mimeTypes) {
        const mimeTypes: string[] = [];
        for (let i = 0; i < navigator.mimeTypes.length; i++) {
          mimeTypes.push(navigator.mimeTypes[i]?.type ?? "");
        }
        res.push(mimeTypes.join("|"));
      } else {
        res.push("");
      }

      // Otras propiedades
      res.push((navigator.languages ?? []) as string[]);
      res.push(navigator.hardwareConcurrency ?? 0);

      // Contar propiedades de navigator
      let navigatorKeyCount = 0;
      for (const key in navigator) {
        if (Object.prototype.hasOwnProperty.call(navigator, key)) {
          navigatorKeyCount++;
        }
      }
      res.push(navigatorKeyCount);
    } catch {
      // ignore
    }
    return this.hash(JSON.stringify(res));
  }

  async generateCanvasID(): Promise<string> {
    try {
      const canvas = document.createElement("canvas");
      canvas.height = 100;
      canvas.width = 800;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.font = "30px Arial";
        ctx.fillText("Hello World", 20, 90);
      }
      const dataUrl = canvas.toDataURL();
      return this.hash(dataUrl);
    } catch {
      return this.hash("canvas-fallback");
    }
  }

  async generateWebGlID(): Promise<string> {
    try {
      const canvas = document.createElement("canvas");
      const gl = (canvas.getContext("webgl2") ||
        canvas.getContext("webgl")) as WebGLRenderingContext | null;
      const res: string[] = [];

      if (gl) {
        try {
          // Usar constantes estándar de WebGL
          const RENDERER = 0x1f01; // gl.RENDERER
          const VENDOR = 0x1f00; // gl.VENDOR

          const renderer = gl.getParameter(RENDERER);
          const vendor = gl.getParameter(VENDOR);
          res.push(String(renderer));
          res.push(String(vendor));

          const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
          if (debugInfo) {
            const UNMASKED_RENDERER_WEBGL = 0x9246;
            const UNMASKED_VENDOR_WEBGL = 0x9245;

            const unmaskedRenderer = gl.getParameter(UNMASKED_RENDERER_WEBGL);
            const unmaskedVendor = gl.getParameter(UNMASKED_VENDOR_WEBGL);
            res.push(String(unmaskedRenderer));
            res.push(String(unmaskedVendor));
          }
        } catch {
          // Ignorar errores en la obtención de parámetros WebGL
        }
      }
      return this.hash(JSON.stringify(res));
    } catch {
      return this.hash("webgl-fallback");
    }
  }

  async getIPAddress(): Promise<string> {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = (await response.json()) as { ip: string };
      localStorage.setItem("KEY_DEVICE_ADDRESS", data.ip);
      return data.ip || "0.0.0.0";
    } catch {
      return "0.0.0.0";
    }
  }

  async completeID(): Promise<string> {
    const [headerId, canvasId, webGlId, ipAddress] = await Promise.all([
      this.generateHeaderID(),
      this.generateCanvasID(),
      this.generateWebGlID(),
      this.getIPAddress(),
    ]);
    return this.hash(headerId + canvasId + webGlId + ipAddress);
  }
}
