import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ios-webview',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
