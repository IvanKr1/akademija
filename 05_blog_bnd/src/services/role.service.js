import dbService from './database.service'

class RoleService {

	getAllRoles() {
		return dbService.query('SELECT * FROM role')
	}

	getRole(id) {
		return dbService.query(`SELECT * FROM role WHERE roleId = ${id};`)
	}

	async updateRole(data, dataID) {
		let buildString = ''
		const actions = ['role', 'level', 'userId']
		for (const item of Object.keys(data)) {
			if (actions.includes(item)) {
				buildString =`${buildString}${item}= "${data[item]}",`
			}
			
		}
		let setValues = buildString.slice(0, buildString.length - 1)
		
		// console.log(fetchedResult.data[0].role)
		return dbService.query(`
		UPDATE blog.role
		SET ${setValues}
		WHERE roleId=${dataID};
		`)
	}

	insertRole(data) {
		let primaryId = 0;
		
		return dbService.query(`
			INSERT INTO role 
			 VALUES (${primaryId}, "${data.role}", ${data.level}, ${data.userId})
			 `)
	}

	delRole(id) {
		return dbService.query(`
		DELETE FROM role WHERE roleId = ${id}
		`)
	}
}



module.exports = new RoleService()