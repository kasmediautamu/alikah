import fetcher from './fetcher'

export default function fetchFashion() {
	return fetcher('/api/fashion')
}
