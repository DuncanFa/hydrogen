import {TestMenuRSCOutlet} from './index.server';
import {TestClient} from '../../components/TestClient.client';

export default function Subnav2() {
  return (
    <div className="border border-primary p-6">
      <TestMenuRSCOutlet />
      <div className="border border-primary p-6">
        <p>Subnav 2</p>
        <TestClient defaultSelected="Test Client 2" />
      </div>
    </div>
  );
}