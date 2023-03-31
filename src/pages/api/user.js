// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function user(req, res) {
  res.status(200).json({
    results: [
      {
        user: 'Lucas',
        birth: 1985,
      },
      {
        user: 'Suelen',
        birth: 1990,
      },
      {
        user: 'Lucas',
        birth: 2013,
      },
    ]
  })
}
