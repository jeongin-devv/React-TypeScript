import path from 'path';
import fs from 'fs/promises';
import { GetServerSidePropsContext } from "next";

type ProductType = { 
  id: string,
  title: string,
	description: string;
}

interface Props {
	loadedProduct: ProductType;
}
/** 동적 페이지는 사전 생성하지 않는다. */
/** 페이지가 여러개 존재하는데, 어떤 값에 따라 어떤 화면을 생성해야 하는지 */
/** 미리 알 수가 없으므로 사전 생성할 수 없다. */
/** 따라서 미리 인스턴스 값을 생성해서 알려줘야 제대로 동작한다. */

const ProductDetailPage = (props: Props) => {
	const { loadedProduct } = props;
	return (
		<>
			<h1>{loadedProduct.title}</h1>
			<p>{loadedProduct.description}</p>
		</>
	)
}

export async function getStaticProps(context : GetServerSidePropsContext) {
	const { params } = context;
	/** useRouter 에서 query 값을 꺼낼때는 브라우저 내에서 작동하고, */
	/** 여기서 params 를 꺼낼때는 서버 사이드에서 컴포넌트가 렌더링 되기 전에 작동한다.  */
	const productId = params?.pid;
	
	const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(`${jsonData}`);

	const product : ProductType = data.products.find((product : ProductType) => product.id === productId);

	return {
		props: {
			loadedProduct: product
		}
	}
}

/** 동적 페이지 인스턴스 생성 */
export async function getStaticPaths() {
	return {
		paths: [
			{ params: { pid: 'p1' } },
			{ params: { pid: 'p2' } },
			{ params: { pid: 'p3' } },
		],
		fallback: false
	};
}

export default ProductDetailPage;
