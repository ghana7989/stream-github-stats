import './GithubCard.styles.scss';
export interface IGithubCardProps {
	username: string;
	avatarUrl: string;
	company: string;
	followers: number;
	following: number;
	publicRepos: number;
}
export default function GithubCard(props: IGithubCardProps) {
	return (
		<div className='container'>
			<div className='user-details'>
				<div className='avatar'>
					<img src={props.avatarUrl} alt='avatar' />
				</div>
				<div className='text-details'>
					<a href={`https://github.com/${props.username}`}>
						<h1>{props.username}</h1>
					</a>
					<span>{props.company}</span>
				</div>
			</div>
			<div className='stats'>
				<div className='box'>
					<h3 className='count'>{props.followers}</h3>
					<h4 className='title'>followers</h4>
				</div>
				<div className='box'>
					<h3 className='count'>{props.following}</h3>
					<h4 className='title'>following</h4>
				</div>
				<div className='box'>
					<h3 className='count'>{props.publicRepos}</h3>
					<h4 className='title'>public repos</h4>
				</div>
			</div>
		</div>
	);
}
