import fetcher from './fetcher'

export default function fetchEducation() {
	return fetcher('/api/education')
}
