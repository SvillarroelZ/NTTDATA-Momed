import React from 'react'
import "./style.css";
import Pagination from '@mui/material/Pagination';
import { Grid } from '@mui/material';


const Table = ({ infoTable, infoProfessional }) => {

    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [page, setPage] = React.useState(0);

    let page_url = 1

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }


    if (infoTable) {


        return (
            <>
            <section className="cont-table">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <p>
                                    Fecha{" "}
                                    <span class="material-symbols-outlined">
                                        keyboard_arrow_down
                                    </span>
                                </p>
                            </th>
                            <th>
                                <p>
                                    Ámbito{" "}
                                    <span class="material-symbols-outlined">
                                        keyboard_arrow_down
                                    </span>
                                </p>
                            </th>
                            <th>
                                <p>
                                    Doc. HM{" "}
                                    <span class="material-symbols-outlined">
                                        keyboard_arrow_down
                                    </span>
                                </p>
                            </th>
                            <th>
                                <p>
                                    Factor{" "}
                                    <span class="material-symbols-outlined">
                                        keyboard_arrow_down
                                    </span>
                                </p>
                            </th>
                            <th>
                                <p>
                                    Estado{" "}
                                    <span class="material-symbols-outlined">
                                        keyboard_arrow_down
                                    </span>
                                </p>
                            </th>
                            <th>
                                <p>
                                    Monto Aporte{" "}
                                    <span class="material-symbols-outlined">
                                        keyboard_arrow_down
                                    </span>
                                </p>
                            </th>
                            <th>
                                <p>
                                    Monto bruto{" "}
                                    <span class="material-symbols-outlined">
                                        keyboard_arrow_down
                                    </span>
                                </p>
                            </th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {infoTable.map((val) => {
                            // let changeText = val.estado.toLowerCase().replace(" ", "");
                            return (
                                <tr>

                                    <td>{val.date.slice(0, 10)}</td>
                                    <td>{val.ambit}</td>
                                    <td>{val.doc_hm}</td>
                                    <td>{val.factor}</td>
                                    <td>
                                        <div className="estatus">
                                            {val.state}{" "}
                                            {/* <span class={`circle ${changeText}`}></span> */}
                                        </div>
                                    </td>
                                    <td>{val.amount_contribution}</td>
                                    <td>{val.amount_gross}</td>
                                    <td>
                                        <div className="actions">
                                            <button>
                                                <span class="material-symbols-outlined">
                                                    description
                                                </span>
                                            </button>
                                            <button>
                                                <a href={`mailto:${infoProfessional[0].email}?subject=Holi%20Maca%20Paredes`}>mail</a>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </section>
            <Grid className="mt-3 mb-3 mr-3"
                    container
                    justify="flex-end"
                    alignItems="flex-end">
                    <Pagination
                        variant="outlined"
                        defaultPage={parseInt(page_url)}
                        count={Math.ceil(infoTable.length / 10)}
                        rowsPerPage={rowsPerPage}
                        color="primary"
                        shape="rounded"
                        total={infoTable.length}
                        page={page}
                        onChange={handleChangePage}
                    />
                </Grid>

            </>
        )
    }
}
export default Table
    // < a href = "mailto:maka.paredes@gmail.com?subject=Holi%20Maca%20Paredes" > ENVIAR</a >