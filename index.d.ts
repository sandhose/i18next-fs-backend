import * as i18next from 'i18next';

type BackendOptions = {
  loadPath?: (lng: string, ns: string) => string | string,
  addPath?: (lng: string, ns: string) => string | string,
  parse?: (data: string) => any,
  stringify?: typeof JSON.stringify,
};

declare class Backend implements i18next.BackendModule<BackendOptions> {
  type: "backend";

  constructor(services: i18next.Services, options?: BackendOptions, i18nextOptions?: i18next.InitOptions);

  init(services: i18next.Services, backendOptions: BackendOptions, i18nextOptions: i18next.InitOptions): void;
  read(language: string, namespace: string, callback: i18next.ReadCallback): void;
  create(languages: string[], namespace: string, key: string, fallbackValue: string): void;
}

export default Backend;
