import { useEffect, useState } from 'react';
import './App.css';
import { IGetUserResponse } from './types/github-user.types';
import GithubCard, { IGithubCardProps } from './components/GithubCard';

function App({ div }: { div: HTMLDivElement }) {
	const [userData, setUserData] = useState<IGithubCardProps | null>(null);

	useEffect(() => {
		if (userData) return;
		const fetchUsers = async (username: string) => {
			const data = await fetch(`https://api.github.com/users/${username}`, {
				method: 'GET',
			}).then((res) => res.json());
			console.log(data);

			return data as IGetUserResponse;
		};
		const userName = div?.getAttribute('data-username');
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
