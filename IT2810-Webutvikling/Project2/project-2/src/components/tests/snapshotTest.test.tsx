import { render } from '@testing-library/react'
import CommitDateFilter, { dropDownDate } from '../atoms/commitDateFilter';
import MemberDisplay from '../atoms/memberDisplay';
import { commitInfo } from '../molecules/commitWindow';

it('renders correctly when there are no commits', () => {
    function mockFunction(commitProps: commitInfo[]){}
    const tree = render(<CommitDateFilter commits={[]} setFilteredCommits={mockFunction}/>);
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when arrow has been clicked', () => {
    function mockFunction(commitProps: commitInfo[]){}
    let filter = render(<CommitDateFilter commits={[]} setFilteredCommits={mockFunction}/>);
    dropDownDate();
    const tree = filter;
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly memberWindow', () => {
    let name = "Bob dette er gøy";
    let image = "https://gitlab.stud.idi.ntnu.no/uploads/-/system/user/avatar/3739/avatar.png";
    let accessGranted="12.09.1999"
    const tree = render(<MemberDisplay name={name} image={image} accessGranted={accessGranted}/>);
    expect(tree).toMatchSnapshot();
  });
  