import { render } from '@testing-library/react'
import CommitDisplay from '../atoms/commitDisplay'

//tests that CommitDisplay shows the correct values from its props
test('CommitDisplay shows correct text in h1 and p', () => {  
  const {container} = render(<CommitDisplay name={"commit display"} date={"12.12.2022"} commitMessage={"Something has been committed"}/>);
  expect(container.querySelector('h1')?.innerHTML).toMatch("commit display");
  expect(container.querySelector('p')?.innerHTML).toMatch("<span id=\"bold\">Date:</span> 12.12.2022 <br><span id=\"bold\">Commit message:</span> <br>Something has been committed");
});