import { helloWorld } from '.'

test("project is ready", async () => {
  expect(helloWorld()).toEqual("Hello World!")
})