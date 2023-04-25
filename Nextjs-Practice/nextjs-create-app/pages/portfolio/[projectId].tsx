// React를 이용해 만들어진 Next.js 의 Hook 중 하나
import { useRouter } from 'next/router';
// Dynamic Routing Page
// 정적 라우팅 페이지가 우선되고, 동적 라우팅이 후순위로 작용한다.
const PortfolioProjectPage = () => {
	const router = useRouter();

	console.log(router.pathname);
	console.log(router.query);

	//Backend API 를 호출하기 위해 url 쿼리에서 값을 받아 사용 가능

	return (
		<div>
			<h1>The Portfolio Project Page</h1>
		</div>
	)
}

export default PortfolioProjectPage;