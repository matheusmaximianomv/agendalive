import { SafeResourceUrl } from '@angular/platform-browser';

/**
 * Classe de acordo com o curso
 *
 * export class Live {
 *  id: string;
 *  liveName: string;
 *  channelName: string;
 *  liveTime: string;
 *  liveLink: string;
 *  registrationDate: string;
 * }
 */

export class Live {
  public id: number;
  public name: string;
  public channel: string;
  public url: string;
  public date: string;
  public disponible: boolean;
  public safeUrl?: SafeResourceUrl;

  constructor() {}
}
