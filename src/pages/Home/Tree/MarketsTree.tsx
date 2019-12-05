import React from 'react';
import PropTypes from 'prop-types';
import { Tree } from 'antd';

import './MarketsTree.scss';
import { withCatch } from '../../../components/common/withCatch';
import { TTreeItem } from '../../../types/treeItem';

type Props = {
  items: TTreeItem[];
  onToggle: Function;
};
type State = {
  userExpandedKeys: string[];
  autoExpandParent: boolean;
};

export class MarketsTree extends React.PureComponent<Props, State> {
  static propTypes;
  private static getKey({ id, label, type }: TTreeItem) {
    return `${id}@${type}@${label}`;
  }

  state: State = {
    userExpandedKeys: [],
    autoExpandParent: true,
  };

  handleExpand = userExpandedKeys => this.setState({
    userExpandedKeys,
    autoExpandParent: false,
  });

  mapData = (data: TTreeItem[]) => data.map((item: TTreeItem) => {
    const { children, id, isSelected, label, type } = item;
    const props = {
      children: children && this.mapData(children),
      id,
      title: <span>{label}</span>,
      type,
    };
    return <Tree.TreeNode key={MarketsTree.getKey(item)} {...props} />
  });

  render() {
    const { autoExpandParent, userExpandedKeys } = this.state;
    const children = this.mapData(this.props.items);

    return (
      <div className="MarketsTree">
        <Tree
          autoExpandParent={autoExpandParent}
          expandedKeys={userExpandedKeys}
          onExpand={this.handleExpand}
          // onSelect={this.handleSelect}
        >
          {children}
        </Tree>
      </div>
    );
  }
}


MarketsTree.propTypes = {
  items: PropTypes.array,
  onToggle: PropTypes.func.isRequired,
};

export default withCatch(MarketsTree) as any;
