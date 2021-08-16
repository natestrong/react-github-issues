import axios from 'axios';
import '../App.css';
import {FC, useEffect, useState} from 'react';

type Issue = {
    number: number
    title: string
    state: string
}

type Props = {
    repoName: string
}

const GitHub: FC<Props> = ({repoName}) => {
    const [issues, setIssues] = useState<Issue[]>([]);

    useEffect(() => {
        axios
            .get(`https://api.github.com/repos/${repoName}/issues`)
            .then((response: any) => {
                setIssues(response.data);
            });
    }, [repoName]);

    return (
        <>
            <h3>{repoName}</h3>

            <div className='issue-container'>
                {issues.map((issue: Issue) => (
                    <p key={issue.title}>
                        <strong>#{issue.number}</strong> {' '}
                        <a href={`https://github.com/ContentPI/ContentPI/issues/${issue.number}`}
                           target='_blank'>{issue.title}</a> {' '}
                        {issue.state}
                    </p>
                ))}
            </div>
        </>
    );
};

export default GitHub;
