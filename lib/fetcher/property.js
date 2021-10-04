import fetcher from './fetcher'

export default function fetchProperty() {
	return fetcher('/api/property')
}
