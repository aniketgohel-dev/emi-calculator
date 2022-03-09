const EMI = require('../src/emi.js')

test('Loan is defined', () => {
  expect(EMI.Loan).toBeDefined()
})

test('Should throw an error on negative interest rate', () => {
  expect(() => EMI.Loan(10000, -1, 10)).toThrowError('wrong parameters: 10000 -1 10')
})

test('Should calculate correct EMI installments', () => {
  const loan = EMI.Loan(10000, 11, 10)

  expect(loan).toBeDefined()
  expect(loan.installments.length).toBe(12)
  expect(loan.installments[0].installment).toBe(955.17)
  expect(loan.installments[12 - 1].installment).toBe(955.17)
  expect(loan.amount).toBe(10000)
  expect(loan.principalSum).toBe(10955.17)
  expect(loan.interestSum).toBe(506.92)
  expect(loan.sum).toBe(11462.09)

  expect(EMI.rnd(loan.principalSum + loan.interestSum)).toBe(loan.sum)
})
