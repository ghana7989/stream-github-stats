import { useEffect, useState } from 'react';
import './App.css';
import { Octokit } from '@octokit/rest';
import { IGetUserResponse } from './types/github-user.types';
import GithubCard, { IGithubCardProps } from './components/GithubCard';

const TOKEN = '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';
export const octokit = new Octokit({ auth: TOKEN });

const fetchUsers = async (username: string) => {
	const { data } = await octokit.request('GET /users/{username}', {
		username,
	});
	return data as IGetUserResponse;
};
function App() {
	const [userData, setUserData] = useState<IGithubCardProps | null>(null);

	useEffect(() => {
		if (userData) return;
		const userName = document
			.getElementById('github-stats-widget')
			?.getAttribute('data-username');
		(async function () {
			if (!userName) return;
			const data = await fetchUsers(userName);
			setUserData({
				avatarUrl: data.avatar_url,
				company: data.company || data.name,
				followers: data.followers,
				following: data.following,
				publicRepos: data.public_repos,
				username: data.login,
			});
		})();
	}, [userData]);
	return (
		<div className='App'>
			{!!userData ? <GithubCard {...userData} /> : <h1>Loading</h1>}
		</div>
	);
}

export default App;
