import fetcher from './fetcher'

export default function fetchServices() {
	return fetcher('/api/services')
}
