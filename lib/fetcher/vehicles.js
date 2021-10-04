import fetcher from './fetcher'

export default function fetchVehicles() {
	return fetcher('/api/vehicles')
}
