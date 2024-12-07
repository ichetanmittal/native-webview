import { WebView } from 'react-native-webview';
import { StyleSheet, SafeAreaView } from 'react-native';

const htmlContent = `
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          font-family: Arial, sans-serif;
          font-size: 24px;
        }
      </style>
    </head>
    <body>
      <h1>Hello World</h1>
    </body>
  </html>
`;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ html: htmlContent }}
        style={styles.webview}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});