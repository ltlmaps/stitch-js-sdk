/**
 * Copyright 2018-present MongoDB, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { StitchAppClientInfo } from "../src";

describe("StitchAppClientInfoUnitTests", () => {
  it("should init", () => {
    const clientAppId = "my_app-12345";
    const dataDirectory = "/srv/mongodb/stitch";
    const localAppName = "myApp";
    const localAppVersion = "1.0";

    const stitchAppClientInfo = new StitchAppClientInfo(
      clientAppId,
      dataDirectory,
      localAppName,
      localAppVersion
    );

    expect(stitchAppClientInfo.clientAppId).toEqual(clientAppId);
    expect(stitchAppClientInfo.dataDirectory).toEqual(dataDirectory);
    expect(stitchAppClientInfo.localAppName).toEqual(localAppName);
    expect(stitchAppClientInfo.localAppVersion).toEqual(localAppVersion);
  });
});
