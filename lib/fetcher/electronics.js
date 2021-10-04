import fetcher from './fetcher'

export default function fetchElectronics() {
	return fetcher('/api/electronics')
}
