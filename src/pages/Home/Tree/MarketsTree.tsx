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
  autoExpandParent: boolean;
  checkedKeys: string[];
  expandedKeys: string[];
  selectedKeys: string[];
};

export class MarketsTree extends React.PureComponent<Props, State> {
  static propTypes;

  state: State = {
    autoExpandParent: true,
    checkedKeys: [],
    expandedKeys: [],
    selectedKeys: [],
  };

  onExpand = expandedKeys => {
    console.log('onExpand', expandedKeys);
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  };

  onCheck = checkedKeys => {
    console.log('onCheck', checkedKeys);
    this.setState({ checkedKeys });
  };

  onSelect = (selectedKeys, info) => {
    console.log('onSelect', info);
    this.setState({ selectedKeys });
  };

  renderTreeNodes = (data: TTreeItem[]) => data.map((item: TTreeItem) => {
    const { children, id, label, type } = item;
    const key = `${id}@${type}@${label}`;
    const props = {
      id,
      title: <span>{label}</span>,
      type,
    };
    if (children) {
      return (
        <Tree.TreeNode dataRef={item} key={key} {...props}>
          {this.renderTreeNodes(item.children)}
        </Tree.TreeNode>
      );
    }
    return <Tree.TreeNode key={key} {...item} />;
  });

  render() {
    const { autoExpandParent, checkedKeys, expandedKeys, selectedKeys } = this.state;
    const children = this.renderTreeNodes(this.props.items);

    return (
      <div className="MarketsTree">
        <Tree
          autoExpandParent={autoExpandParent}
          checkable
          expandedKeys={expandedKeys}
          onCheck={this.onCheck}
          onExpand={this.onExpand}
          checkedKeys={checkedKeys}
          onSelect={this.onSelect}
          selectedKeys={selectedKeys}
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
