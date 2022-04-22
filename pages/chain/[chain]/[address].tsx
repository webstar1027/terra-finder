import CheckIcon from "@mui/icons-material/Check";
import {
  Avatar,
  Card,
  CardContent,
  Container,
  Stack,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useAtomValue } from "jotai";
import moment from "moment";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAddressData } from "../../../src/apis/address";
import Form from "../../../src/components/shared/atoms/Form";
import { selectedActiveAtom } from "../../../src/store/app";

const SearchAddress: NextPage = () => {
  const router = useRouter();
  const active = useAtomValue(selectedActiveAtom);
  const [bankData, setBankData] = useState<any>();
  const [transactions, setTransactions] = useState<any>();
  const chain = router.query.chain as string;
  const address = router.query.address as string;
  const fetchAddressData = async () => {
    const { bank, swaprate, staking, transactions } = await getAddressData(
      address,
      active,
      chain
    );

    setBankData(bank);
    setTransactions(transactions);
  };

  useEffect(() => {
    fetchAddressData();
    setBankData([]);
    setTransactions([]);
  }, [router]);

  return (
    <Container>
      <Stack paddingTop="1.5rem" sx={{ "&>*": { marginBottom: "0.875rem" } }}>
        <Typography variant="h4">Account Detail</Typography>
        <Form title="Address">
          <Typography>{address}</Typography>
        </Form>
        <Form
          title="Coins"
          sx={{
            ".MuiCardContent-root>*:not(:last-child)": { marginBottom: "16px" },
          }}
        >
          {bankData?.balance?.map((item: any) => (
            <Card key={item.denom}>
              <CardContent>
                <Stack direction="row" alignItems="center" gap="12px">
                  <Avatar />
                  <Typography variant="body1">{item.denom}</Typography>

                  <Stack marginLeft="auto">
                    <Typography textAlign="end">{item.available}</Typography>
                    <Typography textAlign="end" variant="caption">
                      = {item.available} &nbsp;
                      {active.substring(1, active.length).toUpperCase()}
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Form>
        <Form title="Transactions">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">Tx hash</TableCell>
                <TableCell align="center">Type</TableCell>
                <TableCell align="center">Block</TableCell>
                <TableCell align="center">Timestamp</TableCell>
                <TableCell align="center">Fee</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions?.txs?.map((transaction: any) => (
                <TableRow
                  key={transaction.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    <Stack direction="row">
                      <Typography>
                        {transaction.txhash.substring(0, 7)}...
                        {transaction.txhash.substring(
                          transaction.txhash.length - 7,
                          transaction.txhash.length
                        )}
                      </Typography>
                      <CheckIcon
                        color="success"
                        sx={{ marginLeft: "0.5rem" }}
                      />
                    </Stack>
                  </TableCell>
                  <TableCell align="center">
                    <Block>{transaction.tx.type}</Block>
                  </TableCell>
                  <TableCell align="center">
                    <Typography>
                      {transaction.height}
                      <Span color="secondary.main">
                        ({transaction.chainId})
                      </Span>
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography>
                      {moment(transaction.timestamp).format("yyyy-MM-DD hh:mm")}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography>
                      {"0 Luna" /*transaction.tx.value.fee.amount*/}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Form>
      </Stack>
    </Container>
  );
};

const Span = styled(`span`)`
  font-size: 0.75rem;
`;

const Block = styled(Typography)`
  border-radius: 13px;
  background-color: #2845ae19;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: 26px;
  letter-spacing: -0.3px;
  color: #2845ae;
  padding: 0 15px;
  vertical-align: middle;
`;

export default SearchAddress;
