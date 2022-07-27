import Boards from './components/Boards';
import Handlers from './components/Handlers';
import {Layout} from './components/Layout/Layout';
import Range from './components/Range';
import Wrapper from './components/Wrapper';
import { useHash } from './hooks/useHash';
import { useRange } from './hooks/useRange';
import { Spinner } from './UI/Spinner';

const App = () => {
  const [radius, setRadius] = useRange(0);
  const [scale, setScale] = useRange(0);
  const color = useHash(3000);

  return (
    <Layout>
      <Boards>
        <Handlers>
          <Range min={0} max={5} value={radius} onInput={setRadius} label='Радиус' unit='px' />
          <Range min={0} max={1} value={scale} step={0.1} onInput={setScale} label='Масштаб' unit='' />
        </Handlers>
        <Wrapper>
          <Spinner rmin={+radius} color={color} scalemin={+scale}/>
        </Wrapper>
      </Boards>
    </Layout>
  );
}

export default App;
