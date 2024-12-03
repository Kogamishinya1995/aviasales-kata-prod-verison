import { Formik, Form, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../slices/index";
import {
  allTransfersChecked,
  transfersChecked,
} from "../../../slices/transfersSlice.ts";

const Transfers = () => {
  const transferState = useSelector((state: RootState) => state.transfers);
  const dispatch = useDispatch();

  return (
    <div className="transfer-bar">
      <h2>количество пересадок</h2>
      <Formik
        initialValues={{
          transferAll: transferState.allTransfers,
          noTransfer: transferState.withoutTransfers,
          transfer3: transferState.oneTransfer,
          transfer4: transferState.twoTransfer,
          transfer5: transferState.threeTransfer,
        }}
        enableReinitialize
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onSubmit={() => {}}
      >
        {() => (
          <Form className="transfer-bar__checkbox">
            <div className="transfer-bar__checkbox-label">
              <label
                htmlFor="transferAll"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(allTransfersChecked());
                }}
              >
                <Field
                  type="checkbox"
                  name="transferAll"
                  className="transfer-bar__checkbox-label"
                />
                <p>Все</p>
              </label>
            </div>
            <div className="transfer-bar__checkbox-label">
              <label
                htmlFor="noTransfer"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(transfersChecked("withoutTransfers"));
                }}
              >
                <Field type="checkbox" name="noTransfer" />
                <p>Без пересадок</p>
              </label>
            </div>
            <div className="transfer-bar__checkbox-label">
              <label
                htmlFor="transfer3"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(transfersChecked("oneTransfer"));
                }}
              >
                <Field type="checkbox" name="transfer3" />
                <p>1 пересадка</p>
              </label>
            </div>
            <div className="transfer-bar__checkbox-label">
              <label
                htmlFor="transfer4"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(transfersChecked("twoTransfer"));
                }}
              >
                <Field type="checkbox" name="transfer4" />
                <p>2 пересадки</p>
              </label>
            </div>
            <div className="transfer-bar__checkbox-label">
              <label
                htmlFor="transfer5"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(transfersChecked("threeTransfer"));
                }}
              >
                <Field type="checkbox" name="transfer5" />
                <p>3 пересадки</p>
              </label>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Transfers;
