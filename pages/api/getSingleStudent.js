import prisma from "../../lib/prisma";
export default async (req, res) => {
  const { id } = req.query;
  try {
    const student = await prisma.student.findUnique({
      where: {
        id: id
      },
    })
    res.status(200).json(student)
  }
  catch (error) {
    res.status(400).json({ message: 'Something went wrong', error })
  }
}

