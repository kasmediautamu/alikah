import fetcher from './fetcher'

export default function fetchJobs() {
	return fetcher('/api/jobs')
}
