const fs = require('fs')
const prisma = require('./lib/prisma')

async function main() {
  const data = fs.readFileSync('student.json')
  const jsonData = JSON.parse(data)
  console.log("data", jsonData)

  for (let i = 0; i < jsonData.students.length; i++) {
    const student = await prisma.student.create({
      data: {
        name: jsonData.students[i].name,
        registrationNumber: jsonData.students[i].registrationNumber,
        password: jsonData.students[i].password,
        timeOfClass: jsonData.students[i].timeOfClass,
        email: jsonData.students[i].email
      }
    })
    console.log(`Created student with ID: ${student.id}`)
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
