import path from 'path';
import fs from 'fs/promises';

type ProductType = { 
  id: string,
  title: string 
}

interface Props {
  products: ProductType[]
}

const HomePage = (props : Props) => {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  )
}
/** 서버사이드에서 실행되며, 브라우저 관리도구에서 코드를 확인 할 수 없음 */
/** 빌드되는 시점에서 코드가 실행 됌 */
export async function getStaticProps() {
  /**  revalidate 마다 실행 될 로깅 */
  console.log('RE-Generating');
  /** cwd : 최상단 디렉토리 기준 */
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(`${jsonData}`);
  return { 
    props: {
      products: data.products
    },
    /** 지정된 초 단위로 페이지를 재생성한다 */
    /** 빌드 시 ISR에 확인 가능 */
    revalidate: 10
  };
}

export default HomePage;
