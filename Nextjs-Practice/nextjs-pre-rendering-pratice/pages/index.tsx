import path from 'path';
import fs from 'fs/promises';
import Link from 'next/link';

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
        <li key={product.id}>
          <Link href={`/${product.id}`}>{product.title}</Link>
        </li>
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

/** 서버 사이드에서 데이터패칭에 실패했을 경우, 리다이렉션 시킨다. */ 
  if (!data) {
    return {
      redirect: {
        destination: '/no-data'
      }
    }
  }

  /** 데이터의 특정 케이스에  404 페이지를 로드할 수 있다. */ 
  if (data.products.length === 0) {
    return {
      notFound: true
    };
  }

  return { 
    props: {
      products: data.products
    },
    /** 지정된 초 단위로 페이지를 재생성한다 */
    /** 빌드 시 ISR에 확인 가능 */
    revalidate: 10,
  };
}

export default HomePage;
