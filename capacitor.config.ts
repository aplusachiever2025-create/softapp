import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.aplus.achiever.tutorsmartmatch',
  appName: 'Tutor SmartMatch',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'https'
  },
  android: {
    backgroundColor: '#ffffff'
  }
};

export default config;
