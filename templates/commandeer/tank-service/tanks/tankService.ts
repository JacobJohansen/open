import { Tank } from './tank';

const tanksLocal = require(`./tanks.json`);

export class TankService {

  private static _tanks: Tank[] = [];

  public static async clearCache(): Promise<void> {
    try {
      this._tanks = [];
    } catch (ex) {
      throw ex;
    }
  }

  public static getTanks(): Tank[] {
    // if already cached, return the tanks
    if (this._tanks && this._tanks.length) {
      return this._tanks;
    }

    // save the local json tanks file to the local _tanks array
    this._tanks = tanksLocal.map(t => {
      return new Tank(t);
    });

    return this._tanks;
  }

}