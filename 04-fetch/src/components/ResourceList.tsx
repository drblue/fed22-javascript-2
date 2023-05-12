import React from 'react'
import { IResource } from '../types'

interface IProps {
	error: string
	loading: boolean
	resource: string
	data: IResource[]
}

const ResourceList: React.FC<IProps> = ({ error, loading, resource, data }) => {

	if (loading) {
		return <p>Loading...</p>
	}

	if (error) {
		return <p>{error}</p>
	}

	if (!resource) {
		return <p>Please select a resource to view</p>
	}

	if (!data.length) {
		return <p>No data existed</p>
	}

	return (
		<>
			<h2>{resource}</h2>
			<p>There are {data.length} {resource}.</p>
			<ol>
				{data.map(item => (
					<li key={item.id}>{item.title}</li>
				))}
			</ol>
		</>
	)
}

export default ResourceList
