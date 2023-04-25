import { useRouter } from 'next/router';

const ClientProjectsPage = () => {
	const router = useRouter();
	// id 만 확인 가능
	const { query } = router;

	const loadProjectHandler = () => {
		// load data...
		router.push({
			pathname: '/clients/[id]/[clientprojectId]',
			query: { id: 'max', clientprojectId: 'projectA'}
		})
	}
	return (
		<div>
			<h1>The Projects of a Given Client</h1>
			<button onClick={loadProjectHandler}>Load Project A</button>
		</div>
	);
}

export default ClientProjectsPage;
