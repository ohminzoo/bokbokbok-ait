import { appsInToss } from '@apps-in-toss/framework/plugins'
import { defineConfig } from '@granite-js/react-native/config'

export default defineConfig({
  appName: '복복복',
  scheme: 'bokbokbok',
  plugins: [
    appsInToss({
      brand: {
        displayName: '복복복',
        primaryColor: '#FF8FA3',
        icon: 'https://raw.githubusercontent.com/ohminzoo/bokbokbok-ait/main/src/assets/cat-happy.png',
      },
      permissions: [],
    }),
  ],
})
