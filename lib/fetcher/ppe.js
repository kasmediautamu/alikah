import fetcher from './fetcher'

export default function fetchPPE() {
	return fetcher('/api/ppe')
}
