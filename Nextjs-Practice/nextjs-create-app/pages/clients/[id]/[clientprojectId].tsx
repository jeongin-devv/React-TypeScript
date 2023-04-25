// 중첩 동적 라우팅
// 중괄호로 폴더를 만들고, 안에 동적 라우팅을 위한 페이지를 넣으면
// 중첩된 동적 라우팅을 사용 할 수 있다.

import { useRouter } from 'next/router';

const SelectedClientProjectPage = () => {
	const router = useRouter();
	// query 에서 id, clientprojectId  확인 가능
	console.log(router.query);

	return (
		<div>
			<h1>
				The Project Page for a Specific project for a Selected Client
			</h1>
		</div>
	)
}

export default SelectedClientProjectPage;
