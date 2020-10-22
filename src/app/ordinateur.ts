export class Ordinateur {
    id: number;
    nom: string;
    ref: string;
    img: string;
    os: string;
    ecran: {
        taille: string,
        resolution: string
    };
    stockage: string;
    ram: {
        quantitee: string,
        frequence: string,
        type: string
    };
    processeur: {
        type: string,
        frequence: string
    };
    prix: number;
    connectique: {
        usb: number,
        ethernet: string,
        hdmi: number,
        audio: string
    };
    connectivite: {
        Wifi: string,
        Bluetooth: string
    };
    isSelected: boolean;
}
