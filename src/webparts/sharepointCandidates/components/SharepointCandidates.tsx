import * as React from 'react';
import styles from './SharepointCandidates.module.scss';
import { ISharepointCandidatesProps } from './ISharepointCandidatesProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SharepointCandidates extends React.Component<ISharepointCandidatesProps, {}> {

  public render(): React.ReactElement<ISharepointCandidatesProps> {
    return (
      <div className={ styles.sharepointCandidates }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to Basic test!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <p>{escape(this.props.text)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
