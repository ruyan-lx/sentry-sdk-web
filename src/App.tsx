import { RouterProvider } from 'react-router-dom'
import { globalRouters } from './router';
import { ConfigProvider } from 'antd';
import { useSystemStore } from './store';
import { useEffect } from 'react';

const App = () => {

  const systemPrimary = useSystemStore((state) => state.systemPrimary);

  const systemSize = useSystemStore((state) => state.systemSize);

  const systemFontFamily = useSystemStore((state) => state.systemFontFamily);

  useEffect(() => {
    document.body.className = document.body.className.replace(/font-family-\S+/g, '');

    if (systemFontFamily) {
      document.body.classList.add(`font-family-${systemFontFamily}`);
    }
  }, [systemFontFamily]);

  return (
    <ConfigProvider
      componentSize={systemSize}
      theme={{
        token: {
          colorPrimary: systemPrimary,
          colorLink: systemPrimary,
        },
      }}
    >
      <RouterProvider router={globalRouters} />
    </ConfigProvider>
  )
}

export default App
