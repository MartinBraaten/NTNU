import { fireEvent, render } from '@testing-library/react'
import IssueOrderToggle from '../atoms/issueOrderToggle'
import { issueInfo } from '../molecules/issueWindow';
import { decodeEntity } from "html-entities";


//tests that IssueOrderToggle toggles text on click
test('On click changes IssueOrderToggle text', () => {
  let issuesProp: issueInfo[] = [];
  let expectedString1: string = "Date " + decodeEntity("&#8595;");
  let expectedString2: string = "Date " + decodeEntity("&#8593;");

  function mockFunction(issuesProp: issueInfo[]) { }
  
  const {container} = render(<IssueOrderToggle issues={issuesProp} setIssues={() => mockFunction(issuesProp)}/>);
  const div = container.querySelector('div');
  expect(div?.innerHTML).toMatch(expectedString1);
  if (div) {
    fireEvent.click(div);
  }
  expect(container.querySelector('div')?.innerHTML).toMatch(expectedString2);

  if (div) {
    fireEvent.click(div);
  }
  expect(container.querySelector('div')?.innerHTML).toMatch(expectedString1);
});