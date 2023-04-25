// Catch-All Routing
import { useRouter } from 'next/router';

const BlogPostsPage = () => {
	const router = useRouter();

	// query 가 배열의 형태로 넘어옴.
	// 스프레드 연산자 라고 생각하면 편할 듯 합니다.
	console.log(router.query);

	return (
		<div>
			<h1>The Blog Posts</h1>
		</div>
	);
}

export default BlogPostsPage;
