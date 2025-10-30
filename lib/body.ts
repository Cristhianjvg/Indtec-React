export function withBody<T extends object>(
    data: T,
    process: string,
    idDevice: string,
    deviceAddress: string
): T & IBase {
    return {
        ...data,
        ...buildSolicitud(process, idDevice, deviceAddress),
    };
}

function buildSolicitud(
    process: string,
    idDevice: string,
    deviceAddress: string
): IBase {
    return {
        idSession: "session-chatbot-indtec",
        idRequest: crypto.randomUUID(),
        dateProcess: new Date().toISOString(), // RFC 3339 completo con timezone
        process,
        idDevice,
        deviceAddress,
    };
}

interface IBase
{
  idSession: string;
  idRequest: string;
  dateProcess: string;
  process: string;
  idDevice: string;
  deviceAddress: string;
}
