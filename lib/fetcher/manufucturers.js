import fetcher from './fetcher'

export default function fetchManufucturers() {
	return fetcher('/api/localmanufucturers')
}
