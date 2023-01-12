import { useRouter } from 'next/router';
// React를 이용해 만들어진 Next.js 의 Hook 중 하나

// domain.com/news/:newsId

const DetailPage = () => {
  const router = useRouter();

  const { newsId } = router.query;

  //Backend API 를 호출하기 위해 url 쿼리에서 값을 받아 사용 가능

  return <h1>The Detail Page</h1>
};

export default DetailPage;
